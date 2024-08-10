export interface StaffProps {
    nombre: string,
    img: string,
    rol: string,
    extra: string
}

export interface PatreonProp{
    nombre: string,
    img: string,
    alt: string,
    link: string
}

export interface NewsProps {
    id?: string;
    title: string;
    desc: string;
    date?: string;
}

export interface RectProps {
    title: string;
    precio: string;
}
export interface TitleProps {
    text: string;
    align?: 'center' | 'right' | 'left';
    color?: 'white' | 'black'
}