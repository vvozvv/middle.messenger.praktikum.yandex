type AppearanceButton = 'primary' | 'ghost';

export type ButtonTypes = {
    page: string;
    title: string;
    type: 'submit' | 'reset' | 'button';
    appearance?: AppearanceButton;
}
