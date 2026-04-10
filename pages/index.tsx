export default function Home() {
  return <>```tsx
import React, { useState } from 'react';

interface AppSuggestion {
  title: string;
  description: string;
  features: string[];
  targetAudience: string;
  monetization: string[];
}

const AppIdeaGenerator: React.FC = () => {
  const [userType, setUserType] = useState<'entrepreneur' | 'creative' | ''>('');
  const [hobbies, setHobbies] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [suggestions, setSuggestions] = useState<AppSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateAppIdeas = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const hobbyList = hobbies.toLowerCase().split(',').map(h => h.trim());
      const interestList = interests.toLowerCase().split(',').map(i => i.trim());
      const generatedSuggestions: AppSuggestion[] = [];

      if (userType === 'entrepreneur') {
        if (hobbyList.some(h => h.includes('fitness') || h.includes('health'))) {
          generatedSuggestions.push({
            title: 'FitTrack Pro',
            description: 'AI-powered fitness coaching and nutrition tracking app with social challenges',
            features: ['Personalized workout plans', 'Meal planning AI', 'Progress analytics', 'Community challenges'],
            targetAudience: 'Health-conscious professionals',
            monetization: ['Subscription model', 'Premium coaching', 'Affiliate partnerships']
          });
        }
        
        if (interestList.some(i => i.includes('invest') || i.includes('finance'))) {
          generatedSuggestions.push({
            title: 'WealthFlow AI',
            description: 'Smart investment portfolio manager with AI-driven market insights',
            features: ['Portfolio optimization', 'Risk assessment', 'Market predictions', 'Automated rebalancing'],
            targetAudience: 'Retail investors and traders',
            monetization: ['Freemium model', 'Commission-based trades', 'Premium insights']
          });
        }

        if (hobbyList.some(h => h.includes('network') || h.includes('social'))) {
          generatedSuggestions.push({
            title: 'ConnectHub Pro',
            description: 'B2B networking platform with AI-powered connection recommendations',
            features: ['Smart matching algorithm', 'Virtual networking events', 'Deal flow tracking', 'CRM integration'],
            targetAudience: 'Business professionals and startups',
            monetization: ['Tiered subscriptions', 'Event hosting fees', 'Premium features']
          });
        }
      }

      if (userType === 'creative') {
        if (hobbyList.some(h => h.includes('art') || h.includes('design'))) {
          generatedSuggestions.push({
            title: 'ArtistFlow',
            description: 'AI-assisted creative workflow manager with inspiration engine',
            features: ['Mood board generator', 'Project timeline tracker', 'Client collaboration', 'AI style suggestions'],
            targetAudience: 'Freelance artists and designers',
            monetization: ['Monthly subscription', 'Marketplace commissions', 'Cloud storage upgrades']
          });
        }

        if (interestList.some(i => i.includes('music') || i.includes('audio'))) {
          generatedSuggestions.push({
            title: 'SoundCraft AI',
            description: 'AI music production assistant with collaboration features',
            features: ['AI beat generation', 'Virtual studio sessions', 'Sample library', 'Mixing suggestions'],
            targetAudience: 'Musicians and producers',
            monetization: ['Subscription tiers', 'Sample pack sales', 'Plugin marketplace']
          });
        }

        if (hobbyList.some(h => h.includes('write') || h.includes('blog'))) {
          generatedSuggestions.push({
            title: 'StoryForge',
            description: 'AI-powered writing assistant with plot development and character building',
            features: ['Plot generator', 'Character development AI', 'Writing analytics', 'Publishing tools'],
            targetAudience: 'Writers and content creators',
            monetization: ['Freemium model', 'Publishing services', 'Advanced AI features']
          });
        }
      }

      if (generatedSuggestions.length === 0) {
        generatedSuggestions.push({
          title: 'CustomFlow',
          description: `A personalized productivity app based on your interests in ${hobbies} and ${interests}`,
          features: ['Custom workflows', 'AI task prioritization', 'Goal tracking', 'Integration hub'],
          targetAudience: 'Professionals with diverse interests',
          monetization: ['Subscription model', 'Enterprise plans', 'Add-on features']
        });
      }

      setSuggestions(generatedSuggestions);
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType && hobbies && interests) {
      generateAppIdeas();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: 'white',
            marginBottom: '0.5rem'
          }}>AI App Idea Generator</h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>Discover your perfect app idea based on your passions</p>
        </header>

        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#333'
              }}>
                I am a(n):
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setUserType('entrepreneur')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    border: `2px solid ${userType === 'entrepreneur' ? '#667eea' : '#e2e8f0'}`,
                    borderRadius: '0.5rem',
                    background: userType === 'entrepreneur' ? '#667eea' : 'white',
                    color: userType === 'entrepreneur' ? 'white' : '#333',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚀 Entrepreneur
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('creative')}</>
}