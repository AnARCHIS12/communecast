'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Lock, Globe, Heart, Flame, Zap } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Home() {
  const [pseudo, setPseudo] = useState('');
  const [roomId, setRoomId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const savedPseudo = localStorage.getItem('communecast-pseudo');
    if (savedPseudo) {
      setPseudo(savedPseudo);
    }
  }, []);

  const generateRoomId = () => {
    const adjectives = ['libre', 'rouge', 'noir', 'rebel', 'solidaire', 'autonome', 'fier', 'fort', 'unite', 'radical'];
    const nouns = ['commune', 'cercle', 'collectif', 'groupe', 'conseil', 'union', 'brigade', 'cellule', 'front', 'resistance'];
    const random = Math.floor(Math.random() * 1000);
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj}-${noun}-${random}`;
  };

  const createRoom = () => {
    if (!pseudo.trim()) {
      alert('Veuillez choisir un pseudo, camarade');
      return;
    }
    localStorage.setItem('communecast-pseudo', pseudo);
    const newRoomId = generateRoomId();
    router.push(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (!pseudo.trim()) {
      alert('Veuillez choisir un pseudo, camarade');
      return;
    }
    if (!roomId.trim()) {
      alert('Veuillez saisir un ID de salle');
      return;
    }
    localStorage.setItem('communecast-pseudo', pseudo);
    router.push(`/room/${roomId}`);
  };

  return (
    <div className="min-h-screen commune-gradient flex flex-col">
      {/* Header */}
      <header className="border-b border-red-600/30 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo className="h-14 w-auto anarchist-glow" />
            <Badge variant="outline" className="border-red-500 text-red-400 encrypted-indicator">
              <Lock className="w-3 h-3 mr-1" />
              E2EE Anarchiste
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold revolutionary-text">
              CommuneCast
            </h1>
            <p className="text-xl text-gray-200 font-medium">
              Vidéoconférence anarchiste et chiffrée
            </p>
            <div className="flex items-center justify-center space-x-3 text-sm text-red-300">
              <Flame className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Ni dieu, ni maître, ni surveillance</span>
              <Zap className="w-5 h-5 text-red-500" />
            </div>
          </div>

          <Card className="commune-card anarchist-border">
            <CardHeader>
              <CardTitle className="text-red-400 text-xl">Rejoindre la révolution</CardTitle>
              <CardDescription className="text-gray-300">
                Aucune donnée enregistrée. Communication libre et autonome.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-red-300 mb-2 block">
                  Votre pseudo anarchiste
                </label>
                <Input
                  type="text"
                  placeholder="Camarade révolutionnaire..."
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  className="commune-input text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-3">
                <Button
                  onClick={createRoom}
                  className="w-full commune-button text-white font-semibold"
                  size="lg"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Créer une cellule révolutionnaire
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-red-600/40" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-black px-3 text-red-400 font-medium">ou</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="ID de la cellule..."
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="commune-input text-white placeholder-gray-400"
                  />
                  <Button
                    onClick={joinRoom}
                    variant="outline"
                    className="w-full border-red-600 text-red-400 hover:bg-red-600 hover:text-white commune-button"
                    size="lg"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Rejoindre la résistance
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features anarchistes */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="commune-card p-4 border border-red-600/30">
              <Shield className="w-7 h-7 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-red-300">Chiffrement E2EE</div>
              <div className="text-xs text-gray-400 mt-1">Inviolable</div>
            </div>
            <div className="commune-card p-4 border border-red-600/30">
              <Lock className="w-7 h-7 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-red-300">Zéro surveillance</div>
              <div className="text-xs text-gray-400 mt-1">Autonome</div>
            </div>
          </div>

          {/* Manifeste anarchiste */}
          <div className="commune-card p-4 border border-red-600/20 text-center">
            <p className="text-sm text-red-300 italic">
              "L'ordre moins le pouvoir égale l'anarchie"
            </p>
            <p className="text-xs text-gray-400 mt-2">
              - Pierre-Joseph Proudhon
            </p>
          </div>
        </div>
      </main>

      {/* Footer anarchiste */}
      <footer className="border-t border-red-600/30 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-red-400">
          <p className="font-medium">🏴 Liberté • Égalité • Fraternité • Anarchie 🏴</p>
          <p className="text-xs text-gray-500 mt-1">Code libre - Résistance numérique</p>
        </div>
      </footer>
    </div>
  );
}