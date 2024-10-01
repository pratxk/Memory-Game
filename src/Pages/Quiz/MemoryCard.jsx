
import React from 'react';
import { Box } from '@chakra-ui/react';
import './MemoryCard.css';

function MemoryCard({ ele, isFlipped, onClick }) {
    return (
        <Box className="flip-card" onClick={onClick}>
            <Box className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <Box className="flip-card-front">
                <img src='https://w7.pngwing.com/pngs/903/953/png-transparent-question-mark-red-question-mark-capitalization-number-question-check-mark-thumbnail.png' alt={ele.name} style={{ width: '200px', height: '200px' }} />
                </Box>
                <Box className="flip-card-back">
                <img src={ele.img} alt={ele.name} style={{ width: '200px', height: '200px' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default MemoryCard;
