'use client';
import GamePage from './game/game-page';
import AppBar from '@/app/common/components/app-bar';

export default function Home() {
    return (
        <>
            <AppBar></AppBar>
            <GamePage></GamePage>
        </>
    );
}
