type AppearanceButton = 'primary' | 'ghost';

export type ButtonTypes = {
    id?: string;
    page: string;
    title: string;
    type: 'submit' | 'reset' | 'button';
    appearance?: AppearanceButton;
}
