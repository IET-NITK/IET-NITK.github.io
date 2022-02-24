import React, { useEffect } from "react";
import Services from "tripetto-services";
import { run } from "tripetto-runner-autoscroll";
import { navigate } from "gatsby";
import * as stylesheet from "./tripetto.module.css";

const CustomTripetto = ({ redirect, id, token }) => {
    useEffect(() => {
        try {
            const {
                definition,
                styles,
                l10n,
                locale,
                translations,
                snapshot,
                attachments,
                onSubmit,
                onPause,
            } = Services.init({ token });
            run({
                element:
                    document.getElementById(
                        id
                    ),
                definition,
                styles,
                l10n,
                locale,
                translations,
                attachments,
                onSubmit,
                snapshot,
                onPause,
                persistent: true,
            });
        } catch (exception) {
            navigate(redirect);
        }
    });

    return (
        <div>
            <div className={`container vh-100 ${stylesheet.tripetto}`} id={id} />
        </div>
    );
};
export default CustomTripetto;