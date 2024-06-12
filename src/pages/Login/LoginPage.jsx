import React from "react";
import illustrations from "./images/ilustation.svg";
import "./login-page.css";
import LogoGoogleIcon from "./images/google-icon.png";
import {InputTextFilled} from "../../components/Inputs/InputTextFilled/InputTextFilled.jsx";
import {ButtonFilled} from "../../components/Buttons/ButtonFilled/ButtonFilled.jsx";
import {OurCheckBox} from "../../components/Inputs/CheckBox/CheckBox.jsx";
import {Link} from "@mui/material";

export const LoginPage = () => {
    return (
        <div className={"login-page"}>
            <div className={"login-page__image-zone"}>
                <div className={"image-zone__image"}>
                    <img src={illustrations} alt="logo"/>
                </div>
            </div>
            <div className={"login-page__form-zone"}>
                <div className={"form-zone__form"}>
                    <div className={"form__header-zone"}>
                        <div className={"header-zone__title"}>
                            <h1>
                                Faça seu Login
                            </h1>
                        </div>
                        <div className={"header-zone__sub-title"}>
                            <p>
                                Fique por dentro do seu perfil
                            </p>
                        </div>
                        <div className={"header-zone__button-zone"}>
                            <ButtonFilled
                                variant="contained"
                                id={"button-google"}
                                text={"Entre com Google"}
                                icon={LogoGoogleIcon}
                                alt={"ícone do google"}
                            />
                        </div>
                    </div>
                    <div className={"form__separator-zone"}>
                        <div className={"separator-zone__text"}>
                            <p>
                                ------------- ou Faça Login -------------
                            </p>
                        </div>
                    </div>
                    <div className={"form__inputs-zone"}>
                        <div className={"inputs-zone__input-text-zone"}>
                            <div className={"input-text-zone_email"}>
                                <InputTextFilled
                                    id="email"
                                    label="Email"
                                    size="small"
                                />
                            </div>
                            <div className={"input-text-zone_password"}>
                                <InputTextFilled
                                    id="password"
                                    label="Senha"
                                    size="small"
                                    type={"password"}
                                />
                            </div>
                        </div>
                        <div className={"inputs-zone__checkbox-zone"}>
                            <div className={"checkbox-zone__checkbox"}>
                                <OurCheckBox
                                    label={"Lembrar Senha"}
                                />
                            </div>
                            <div className={"checkbox-zone__link"}>
                                <Link href="/counter-cells" color="inherit" >Recuperar Senha?</Link>
                            </div>
                        </div>
                    </div>
                    <div className={"form__button-zone"}>
                        <ButtonFilled
                            id={"button-login"}
                            variant="contained"
                            text={"Login"}
                            alt={"botão de login"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};