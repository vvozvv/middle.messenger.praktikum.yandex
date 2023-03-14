type AppearanceButton = 'primary' | 'ghost' | 'bordered';

export type ButtonTypes = {
    id?: string;
    page: string;
    title: string;
    type: 'submit' | 'reset' | 'button';
    appearance?: AppearanceButton;
    events?: Record<string, any>;
    isLoading?: boolean;
}
