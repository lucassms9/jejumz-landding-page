import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { PhasesScreen } from './components/PhasesScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { LoginScreen } from './components/LoginScreen';
import { SignUpScreen } from './components/SignUpScreen';
import { ForgotPasswordScreen } from './components/ForgotPasswordScreen';
import { LandingPage } from './components/LandingPage';
import { BottomNav } from './components/BottomNav';

export type Screen = 'home' | 'history' | 'phases' | 'profile';
export type AuthScreen = 'login' | 'signup' | 'forgot-password';
export type AppView = 'landing' | 'auth' | 'app';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  // Auth handlers
  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('app');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setCurrentView('app');
  };

  // Show landing page
  if (currentView === 'landing') {
    return <LandingPage />;
  }

  // If not authenticated, show auth screens
  if (!isAuthenticated || currentView === 'auth') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md h-[800px] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden">
          {authScreen === 'login' && (
            <LoginScreen
              onLogin={handleLogin}
              onNavigateToSignUp={() => setAuthScreen('signup')}
              onNavigateToForgotPassword={() => setAuthScreen('forgot-password')}
            />
          )}
          {authScreen === 'signup' && (
            <SignUpScreen
              onSignUp={handleSignUp}
              onNavigateToLogin={() => setAuthScreen('login')}
            />
          )}
          {authScreen === 'forgot-password' && (
            <ForgotPasswordScreen
              onNavigateToLogin={() => setAuthScreen('login')}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[800px] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden">
        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto">
          {currentScreen === 'home' && <HomeScreen />}
          {currentScreen === 'history' && <HistoryScreen />}
          {currentScreen === 'phases' && <PhasesScreen />}
          {currentScreen === 'profile' && <ProfileScreen />}
        </div>

        {/* Bottom Navigation */}
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      </div>
    </div>
  );
}