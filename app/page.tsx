'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Lock, Globe, Heart, Flame } from 'lucide-react';
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
    const adjectives = ['libre', 'rouge', 'noir', 'uni', 'solidaire', 'rebel', 'fier', 'fort'];
    const nouns = ['commune', 'cercle', 'assembly', 'collectif', 'groupe', 'conseil', 'union'];
    const random = Math.floor(Math.random() * 1000);
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj}-${noun}-${random}`;
  };

  const createRoom = () => {
    if (!pseudo.trim()) {
      alert('Veuillez choisir un pseudo');
      return;
    }
    localStorage.setItem('communecast-pseudo', pseudo);
    const newRoomId = generateRoomId();
    router.push(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (!pseudo.trim()) {
      alert('Veuillez choisir un pseudo');
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
      <header className="border-b border-red-900/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo className="h-12 w-auto" />
            <Badge variant="outline" className="border-red-600 text-red-400">
              <Lock className="w-3 h-3 mr-1" />
              Chiffré E2EE
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              CommuneCast
            </h1>
            <p className="text-lg text-gray-300">
              Vidéoconférence libre, chiffrée et décentralisée
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Flame className="w-4 h-4 text-red-500" />
              <span>Pour le peuple, par le peuple</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>

          <Card className="bg-black/60 border-red-900/30">
            <CardHeader>
              <CardTitle className="text-red-400">Rejoindre la conversation</CardTitle>
              <CardDescription>
                Aucune donnée n'est enregistrée. Tout est éphémère et chiffré.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Votre pseudo
                </label>
                <Input
                  type="text"
                  placeholder="Camarade..."
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  className="bg-black/40 border-red-900/40 text-white placeholder-gray-500"
                />
              </div>

              <div className="space-y-3">
                <Button
                  onClick={createRoom}
                  className="w-full bg-red-700 hover:bg-red-600 text-white"
                  size="lg"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Créer une nouvelle salle
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-red-900/30" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-black px-2 text-gray-500">ou</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="ID de la salle..."
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="bg-black/40 border-red-900/40 text-white placeholder-gray-500"
                  />
                  <Button
                    onClick={joinRoom}
                    variant="outline"
                    className="w-full border-red-700 text-red-400 hover:bg-red-700 hover:text-white"
                    size="lg"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Rejoindre la salle
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-black/40 rounded-lg p-4 border border-red-900/20">
              <Shield className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-300">Chiffrement E2EE</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 border border-red-900/20">
              <Lock className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-300">Zéro stockage</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          <p>Libre • Égalité • Fraternité • Code ouvert</p>
        </div>
      </footer>
    </div>
  );
}