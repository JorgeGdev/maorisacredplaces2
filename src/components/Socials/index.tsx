import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://github.com/JorgeGdev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Github</p>
                        <Icon iconData="github" alt="github icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.linkedin.com/in/jorge-guerrero-jorgegdev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>LinkedIn</p>
                        <Icon iconData="linkedin" alt="linkedin icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.instagram.com/jorgegdev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Facebook</p>
                        <Icon iconData="facebook" alt="facebook icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://x.com/JorgeGuerrero82"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Twitter</p>
                        <Icon iconData="twitter" alt="twitter icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.instagram.com/jorgegdev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Instagram</p>
                        <Icon iconData="instagram" alt="instagram icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
