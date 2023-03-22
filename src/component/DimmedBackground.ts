import styled from 'styled-components';

type DimmedBackgroundProps = {
    image?: string;
    color?: string;
    opacity?: number;
};

export const DimmedBackground = styled.article<DimmedBackgroundProps>`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${({ image }) => image && `background-image: url(${image});`};
    ${({ color }) => color && `background-color: ${color};`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    :before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, ${({ opacity = 0.4 }) => opacity});
    }
`;
