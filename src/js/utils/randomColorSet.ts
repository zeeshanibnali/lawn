import colorSets from "../stores/colorSets";
import { ThemeStore, ThemeStorePayload } from "../stores/themeStore";

let lastSelectedColorSet: any = null;

export const randomizeColors = () => {
    let randomColorSet;

    do {
        randomColorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
    } while (randomColorSet === lastSelectedColorSet);

    lastSelectedColorSet = randomColorSet;

    let primary = randomColorSet.colors[0];
    let secondary = randomColorSet.colors[1];
    let primButton = randomColorSet.colors[2];
    let secButton = randomColorSet.colors[3];
    let accent = randomColorSet.colors[4];

    return {
        primary, secondary,
        primButton, secButton, accent
    }



    // contrast checker

    // const primbuttnColorValue = primbuttnColor.value;

    // primaryButtons.forEach(primaryButton => {
    //     const primaryColorValue = primaryColor.value;
    //     const secondaryColorValue = secondaryColor.value;

    //     const primaryBrightness = getBrightness(primaryColorValue);
    //     const secondaryBrightness = getBrightness(secondaryColorValue);

    //     const contrastRatio = getContrastRatio(primbuttnColorValue, primaryColorValue);

    //     if (primaryBrightness < secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             primaryButton.style.color = 'var(--secondary)';
    //             primbuttnColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             primaryButton.style.color = 'var(--primary)';
    //             primbuttnColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    //     if (primaryBrightness > secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             primaryButton.style.color = 'var(--secondary)';
    //             primbuttnColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             primaryButton.style.color = 'var(--primary)';
    //             primbuttnColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    // });

    // const secbuttnColorValue = secbuttnColor.value;

    // faqQuestions.forEach(faqQuestion => {
    //     const primaryColorValue = primaryColor.value;
    //     const secondaryColorValue = secondaryColor.value;

    //     const primaryBrightness = getBrightness(primaryColorValue);
    //     const secondaryBrightness = getBrightness(secondaryColorValue);

    //     const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);

    //     if (primaryBrightness < secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             faqQuestion.style.color = 'var(--secondary)';
    //             secbuttnColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             faqQuestion.style.color = 'var(--primary)';
    //             secbuttnColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    //     if (primaryBrightness > secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             faqQuestion.style.color = 'var(--secondary)';
    //             secbuttnColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             faqQuestion.style.color = 'var(--primary)';
    //             secbuttnColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    // });

    // secondaryButtons.forEach(secondaryButton => {
    //     const primaryColorValue = primaryColor.value;
    //     const secondaryColorValue = secondaryColor.value;

    //     const primaryBrightness = getBrightness(primaryColorValue);
    //     const secondaryBrightness = getBrightness(secondaryColorValue);

    //     const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);

    //     if (primaryBrightness < secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             secondaryButton.style.color = 'var(--secondary)';
    //             secbuttnColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             secondaryButton.style.color = 'var(--primary)';
    //             secbuttnColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    //     if (primaryBrightness > secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             secondaryButton.style.color = 'var(--secondary)';
    //             secbuttnColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             secondaryButton.style.color = 'var(--primary)';
    //             secbuttnColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    // });

    // const accentColorValue = accentColor.value;

    // partTwo.forEach(partTwo => {
    //     const primaryColorValue = primaryColor.value;
    //     const secondaryColorValue = secondaryColor.value;

    //     const primaryBrightness = getBrightness(primaryColorValue);
    //     const secondaryBrightness = getBrightness(secondaryColorValue);

    //     const contrastRatio = getContrastRatio(accentColorValue, primaryColorValue);

    //     if (primaryBrightness < secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             partTwo.style.color = 'var(--secondary)';
    //             accentColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             partTwo.style.color = 'var(--primary)';
    //             accentColorClass.style.color = 'var(--primary)';
    //         }
    //     }

    //     if (primaryBrightness > secondaryBrightness) {
    //         if (contrastRatio < 4.5) {
    //             partTwo.style.color = 'var(--secondary)';
    //             accentColorClass.style.color = 'var(--secondary)';
    //         }
    //         else if (contrastRatio > 4.5) {
    //             partTwo.style.color = 'var(--primary)';
    //             accentColorClass.style.color = 'var(--primary)';
    //         }
    //     }
}
