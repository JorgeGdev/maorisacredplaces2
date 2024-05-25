import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+"
                            target="_blank"
                        >
                            <h3>The Department of Conservation</h3>
                            <p>
                            Conservation emergencies (24/7 hotline): Call 0800 DOC HOT -0800 362 468-. Call 111 for all fire, search and rescue and threats to life emergencies.
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="https://www.doc.govt.nz/footer-links/contact-us/"
                            target="_blank"
                        >
                            <h3>Visitor information and bookings:</h3>
                            <p>
                            View parks and recreation for alerts and information on tracks, huts, campsites and hunting. For help with bookings and latest conditions contact a visitor centre.
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>General enquiries:</h3>
                        <p>0800 ASK DOC -0800 275 362-</p>
                        <p>info@doc.govt.nz</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
