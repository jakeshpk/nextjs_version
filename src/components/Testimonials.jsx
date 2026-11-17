'use client';
import { useState } from 'react';
import { googleReviews, GOOGLE_REVIEWS_URL } from '@/data/googleReviews';
import styles from './Testimonials.module.css';

export default function Testimonials() {
 const [showAll, setShowAll] = useState(false);
 const reviews = showAll ? googleReviews : googleReviews.slice(0, 6);
 return <section id="testimonials" className={styles.section} aria-labelledby="client-stories-title">
  <div className={styles.heading}><div><p className={styles.eyebrow}>IN THEIR OWN WORDS / GOOGLE REVIEWS</p><h2 id="client-stories-title">Client Stories</h2><p>Written feedback from our clients on Google.</p></div><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Read reviews on Google Maps ↗</a></div>
  <div className={styles.grid}>{reviews.map(review => <article className={styles.card} key={review.name}><div className={styles.author}><span className={styles.avatar} aria-hidden="true">{review.name.split(' ').filter(Boolean).map(word => word[0]).slice(0,2).join('').toUpperCase()}</span><div><h3>{review.name}</h3><p>Google review</p></div></div><div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}><span aria-hidden="true">{'★'.repeat(review.rating)}</span></div><blockquote lang={review.language || 'en'}>{review.text}</blockquote>{review.excerpt && <p className={styles.excerpt}>Excerpt from the review</p>}<a className={styles.source} href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">View business reviews on Google ↗</a></article>)}</div>
  <div className={styles.controls}><button onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>{showAll ? 'Show fewer reviews' : `Show all ${googleReviews.length} written reviews`}</button><p>Reviews shared from Google Maps. Updated manually.</p></div>
 </section>;
}
