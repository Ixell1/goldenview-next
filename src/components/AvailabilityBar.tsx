'use client';

import { useState, useRef, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

export default function AvailabilityBar() {
  const { lang } = useLang();
  const barRef = useRef(null);
  useReveal(barRef);

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [nightsCount, setNightsCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate nights between dates
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const nights = Math.ceil(
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
      );
      setNightsCount(nights > 0 ? nights : 0);
    } else {
      setNightsCount(0);
    }
  }, [checkInDate, checkOutDate]);

  const handleCheckAvailability = () => {
    if (checkInDate && checkOutDate && guestCount) {
      setModalOpen(true);
    } else {
      alert(lang === 'sr' ? 'Popunite sve dane' : 'Please fill all fields');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phone || !consent) {
      alert(
        lang === 'sr'
          ? 'Popunite sve podatke i privolite'
          : 'Please fill all fields and consent'
      );
      return;
    }

    // Show success message
    setShowSuccess(true);
    setEmail('');
    setPhone('');
    setConsent(false);

    // Auto-close modal after 3 seconds
    setTimeout(() => {
      setModalOpen(false);
      setShowSuccess(false);
    }, 3000);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setShowSuccess(false);
    setEmail('');
    setPhone('');
    setConsent(false);
  };

  const summaryText =
    lang === 'sr'
      ? `${checkInDate} - ${checkOutDate} • ${guestCount} gost${parseInt(guestCount) === 1 ? '' : 'u'} • ${nightsCount} noćenja`
      : `${checkInDate} - ${checkOutDate} • ${guestCount} guest${parseInt(guestCount) === 1 ? '' : 's'} • ${nightsCount} night${nightsCount === 1 ? '' : 's'}`;

  return (
    <>
      <div className="availability-bar reveal" ref={barRef}>
        <div className="availability-bar-grid">
          <div className="availability-field">
            <label>{lang === 'sr' ? 'Prijava' : 'Check-in'}</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          <div className="availability-field">
            <label>{lang === 'sr' ? 'Odjava' : 'Check-out'}</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>

          <div className="availability-field">
            <label>{lang === 'sr' ? 'Broj gostiju' : 'Number of guests'}</label>
            <select
              id="guestCount"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
            >
              <option value="1">{lang === 'sr' ? '1 gost' : '1 guest'}</option>
              <option value="2">{lang === 'sr' ? '2 gosta' : '2 guests'}</option>
              <option value="3">{lang === 'sr' ? '3 gosta' : '3 guests'}</option>
              <option value="4">{lang === 'sr' ? '4 gosta' : '4 guests'}</option>
              <option value="5">{lang === 'sr' ? '5 gostiju' : '5 guests'}</option>
              <option value="6">{lang === 'sr' ? '6 gostiju' : '6 guests'}</option>
              <option value="7">{lang === 'sr' ? '7 gostiju' : '7 guests'}</option>
              <option value="8">{lang === 'sr' ? '8 gostiju' : '8 guests'}</option>
            </select>
          </div>

          <button
            className="btn btn-gold availability-cta"
            id="availCheckBtn"
            onClick={handleCheckAvailability}
          >
            {lang === 'sr' ? 'Proveri dostupnost' : 'Check availability'}
          </button>
        </div>

        {nightsCount > 0 && (
          <div className="nights-counter" id="nightsCounter">
            {nightsCount} {lang === 'sr' ? (nightsCount === 1 ? 'noć' : 'noćenja') : nightsCount === 1 ? 'night' : 'nights'}
          </div>
        )}
      </div>

      {/* Availability Modal */}
      {modalOpen && (
        <div className="avail-modal-overlay" id="availModal">
          <div className="avail-modal">
            <div className="avail-close" id="availModalClose" onClick={handleModalClose}>
              ×
            </div>

            {!showSuccess ? (
              <div id="availFormContent">
                <h3>{lang === 'sr' ? 'Proverite dostupnost' : 'Check availability'}</h3>
                <p className="avail-modal-sub">
                  {lang === 'sr'
                    ? 'Ostavite vaše podatke i javićemo vam u najkraćem mogućem roku.'
                    : 'Leave your details and we will get back to you as soon as possible.'}
                </p>

                <div
                  id="availSummary"
                  style={{
                    background: 'var(--surface)',
                    borderRadius: 'var(--r-sm)',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.2rem',
                    fontSize: '0.85rem',
                    color: 'var(--ink)',
                  }}
                >
                  {summaryText}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="avail-field">
                    <label>{lang === 'sr' ? 'Vaš email' : 'Your email'}</label>
                    <input
                      type="email"
                      id="availEmail"
                      placeholder="email@primer.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="avail-field">
                    <label>{lang === 'sr' ? 'Broj telefona' : 'Phone number'}</label>
                    <input
                      type="tel"
                      id="availPhone"
                      placeholder="063 / 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="avail-consent">
                    <input
                      type="checkbox"
                      id="availConsent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    <label htmlFor="availConsent">
                      {lang === 'sr'
                        ? 'Pristajem da me Goldenview kontaktira putem emaila ili broja telefona. Očekujte odgovor u najkraćem mogućem roku.'
                        : 'I agree that Goldenview may contact me via email or phone number. Expect a response as soon as possible.'}
                    </label>
                  </div>

                  <button type="submit" className="btn btn-gold avail-submit" id="availSubmitBtn">
                    {lang === 'sr' ? 'Pošalji upit' : 'Send inquiry'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="avail-success" id="availSuccess">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>{lang === 'sr' ? 'Hvala vam!' : 'Thank you!'}</h3>
                <p>
                  {lang === 'sr'
                    ? 'Vaš upit je poslat. Javićemo vam se u najkraćem mogućem roku.'
                    : 'Your inquiry has been sent. We will get back to you as soon as possible.'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay backdrop */}
      {modalOpen && (
        <div
          className="avail-modal-backdrop"
          onClick={handleModalClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
        />
      )}
    </>
  );
}
