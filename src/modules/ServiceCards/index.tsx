// src/components/ServiceCards.tsx
import React, { useState, type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";
import { RegionSelector } from "@components/Selector/RegionSelector";

type Card = {
    CODE: number;
    region: string;
    NAME: string;
    LATITUD: number;
    LONGITUD: number;
    IMAGE_URL: string;
    iframe: string;
    description: string;
    imageURL: string;
};

type ServiceCardsProps = {
    title?: string;
    description?: string;
    cards?: Card[];
};

export const ServiceCards: FC<ServiceCardsProps> = ({ cards, description, title }) => {
    const [selectedRegion, setSelectedRegion] = useState<string>("BAY OF PLENTY");

    if (!cards || !cards.length) {
        return null;
    }

    const regions = Array.from(new Set(cards.map(card => card.region)));

    const filteredCards = selectedRegion ? cards.filter(card => card.region === selectedRegion) : cards;

    const cardsElements = filteredCards.map((card, index) => (
        <FadeIn key={index}>
            <TextBox>
                <h3>{card.NAME}</h3>
                <p><strong>Region:</strong> {card.region}</p>
                <p>{card.description}</p>
                <img src={card.imageURL} alt={card.NAME} style={{ width: '100%', height: 'auto' }} />
            </TextBox>
        </FadeIn>
    ));

    return (
        <S.ServiceCardsStyled>
            <Container>
                {title && description && (
                    <FadeIn>
                        <S.ServiceCardsHeading>
                            {description && <p>{description}</p>}
                            {title && <h2>{title}</h2>}
                        </S.ServiceCardsHeading>
                    </FadeIn>
                )}
                <RegionSelector
                    regions={regions}
                    selectedRegion={selectedRegion}
                    onSelectRegion={setSelectedRegion}
                />
                <S.ServiceCardsGrid>{cardsElements}</S.ServiceCardsGrid>
            </Container>
        </S.ServiceCardsStyled>
    );
};
