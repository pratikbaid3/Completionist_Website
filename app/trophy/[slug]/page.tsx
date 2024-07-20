'use client';

import TrophyModel from '@/lib/features/trophy/model/trophy-model';
import {
    clearSelectedGameData,
    getTrophyList,
} from '@/lib/features/trophy/trophy-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import GameModel from '@/lib/features/game/model/game-model';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function GuidePage({ params }) {
    const dispatch = useAppDispatch();
    const trophyList: TrophyModel[] = useAppSelector(
        (state) => state.trophySlice.trophyList
    );
    const currentGame: GameModel | null = useAppSelector(
        (state) => state.trophySlice.currentgame
    );
    useEffect(() => {
        dispatch(getTrophyList(params.slug));
    }, []);
    return (
        <div>
            <header className='fixed w-screen bg-appBarColor top-0 h-16 flex items-center px-5'>
                <div>
                    <Link
                        href='/'
                        onClick={() => {
                            dispatch(clearSelectedGameData());
                        }}
                    >
                        <ChevronLeftIcon
                            aria-hidden='true'
                            className='block h-6 w-6 '
                        />
                    </Link>
                </div>
            </header>
            {currentGame != null && (
                <div className='flex justify-center w-screen my-10 rounded-lg pt-20'>
                    <Image
                        className=' rounded-md'
                        src={currentGame.game_image_link}
                        alt={currentGame.game_image_link}
                        width={300}
                        height={100}
                    ></Image>
                </div>
            )}

            {trophyList.map((trophy) => (
                <div
                    key={trophy.trophy_name}
                    className='flex flex-col overflow-hidden rounded-lg bg-card shadow my-5 mx-5 px-4 py-5'
                >
                    <div className='grow flex gap-x-5 sm:p-6 divide-x divide-secondaryText items-center mb-5'>
                        <Image
                            src={trophy.trophy_image}
                            alt={trophy.trophy_image}
                            width={100}
                            height={100}
                            className='rounded-md'
                        ></Image>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-primaryText pl-5 font-bold text-lg'>
                                {trophy.trophy_name}
                            </h1>
                            <h1 className='text-primaryText pl-5 text-sm'>
                                {trophy.trophy_description}
                            </h1>
                        </div>
                    </div>
                    <>{parse(trophy.trophy_guide)}</>
                </div>
            ))}
        </div>
    );
}

export default GuidePage;
