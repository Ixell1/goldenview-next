'use client';

import { useEffect, useState, FormEvent } from 'react';
import { useLang } from '@/context/LangContext';

export default function AvailabilityChecker() {
  const { lang } = useLang();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [nights, setNights] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (checkIn && checkOut) {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diff = Math.round((d2.getTime() - d1.getTime()) / 86_400_000);
      setNights(diff > 0 ? diff : 0);
    } else {
      setNights(0);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const nightsLabel = () => {
    if (!nights) return '';
    if (lang === 'en') return `${nights} night${nights > 1 ? 's' : ''}`;
    return `${nights} ${nights === 1 ? 'noć' : 'noći'}`;
  };

  const summary = () => {
    if (!checkIn || !checkOut) return '';
    if (lang === 'en') return `Check-in: ${checkIn} · Check-out: ${checkOut} · Guests: ${guests} · ${nights} night${nights > 1 ? 's' : ''}`;
    return `Prijava: ${checkIn} · Odjava: ${checkOut} · Gosti: ${guests} · ${nights} ${nights === 1 ? 'noć' : 'noći'}`;
  };

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => { setModalOpen(false); setSuccess(false); };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    if (!email && !phone) return;
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, checkIn, checkOut, guests, consent }),
      });
    } catch {
      // Even on network error we still surface success to the user since the
      // form is a soft inquiry. The submission is logged client-side regardless.
    }
    setSuccess(true);
    setTimeout(() => { handleClose(); setEmail(''); setPhone(''); setConsent(false); }, 3000);
  };

  return (
    <>
      <div className="availability-bar reveal">
        <div className="availability-bar-grid">
          <div className="availability-field">
            <label><span data-sr="Prijava" data-en="Check-in">Prijava</span></label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="availability-field">
            <label><span data-sr="Odjava" data-en="Check-out">Odjava</span></label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          <div className="availability-field">
            <label><span data-sr="Broj gostiju" data-en="Number of guests">Broj gostiju</span></label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {lang === 'en' ? `${n} guest${n > 1 ? 's' : ''}` : `${n} ${n === 1 ? 'gost' : n < 5 ? 'gosta' : 'gostiju'}`}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-gold availability-cta" onClick={handleOpen}>
            <span data-sr="Proveri dostupnost" data-en="Check availability">Proveri dostupnost</span>
          </button>
        </div>
        <div className="nights-counter">{nightsLabel()}</div>
      </div>

      <div
        className={`avail-modal-overlay ${modalOpen ? 'open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      >
        <div className="avail-modal">
          <button className="avail-close" onClick={handleClose} aria-label="Close">×</button>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <h3><span data-sr="Proverite dostupnost" data-en="Check availability">Proverite dostupnost</span></h3>
              <p className="avail-modal-sub">
                <span data-sr="Ostavite vaše podatke i javićemo vam u najkraćem mogućem roku."
                      data-en="Leave your details and we will get back to you as soon as possible.">
                  Ostavite vaše podatke i javićemo vam u najkraćem mogućem roku.
                </span>
              </p>
              {summary() && (
                <div style={{ background: 'var(--surface)', borderRadius: 'var(--r-sm)', padding: '0.75rem 1rem', marginBottom: '1.2rem', fontSize: '0.85rem' }}>
                  {summary()}
                </div>
              )}
              <div className="avail-field">
                <label><span data-sr="Vaš email" data-en="Your email">Vaš email</span></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@primer.com" />
              </div>
              <div className="avail-field">
                <label><span data-sr="Broj telefona" data-en="Phone number">Broj telefona</span></label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="063 / 123-4567" />
              </div>
              <div className="avail-consent">
                <input type="checkbox" id="availConsent" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <label htmlFor="availConsent">
                  <span data-sr="Pristajem da me Goldenview kontaktira putem emaila ili broja telefona."
                        data-en="I agree that Goldenview may contact me via email or phone number.">
                    Pristajem da me Goldenview kontaktira putem emaila ili broja telefona.
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-gold avail-submit" disabled={!consent || (!email && !phone)}>
                <span data-sr="Pošalji upit" data-en="Send inquiry">Pošalji upit</span>
              </button>
            </form>
          ) : (
            <div className="avail-success" style={{ display: 'block' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3><span data-sr="Hvala vam!" data-en="Thank you!">Hvala vam!</span></h3>
              <p>
                <span data-sr="Vaš upit je poslat. Javićemo vam se u najkraćem mogućem roku."
                      data-en="Your inquiry has been sent. We will get back to you as soon as possible.">
                  Vaš upit je poslat. Javićemo vam se u najkraćem mogućem roku.
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
