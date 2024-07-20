import React, { useEffect } from 'react';
import { getGameList } from '@/lib/features/game/game-slice';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCurrentGame } from '@/lib/features/trophy/trophy-slice';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function GamePage() {
    const gameList = useAppSelector((state) => state.gameSlice.games);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getGameList());
    }, []);

    return (
        <div className='pt-20'>
            <div>
                <div className='mt-2 mx-5'>
                    <input
                        id='search'
                        name='search'
                        type='search'
                        placeholder='Search'
                        className='w-full px-4 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appBarColor sm:text-sm sm:leading-6  bg-card'
                    />
                    <span className='rounded-lg -m-10 pb-1'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>
            {gameList.map((game) => (
                <div
                    key={game.game_name}
                    className='overflow-hidden rounded-lg bg-card shadow my-5 mx-5'
                >
                    <Link
                        href={`/trophy/${game.game_name}`}
                        className='flex mr-5 items-center'
                        onClick={() => {
                            dispatch(setCurrentGame(game));
                        }}
                    >
                        <div className='grow flex gap-x-5 px-4 py-5 sm:p-6 divide-x divide-secondaryText items-center'>
                            <Image
                                src={game.game_image_link}
                                alt={game.game_name}
                                width={100}
                                height={100}
                                className='rounded-md'
                            ></Image>
                            <h1 className='text-primaryText pl-5 font-bold text-lg'>
                                {game.game_name}
                            </h1>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default GamePage;
