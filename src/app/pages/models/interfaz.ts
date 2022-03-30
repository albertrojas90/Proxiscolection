
export interface ReqResResponse {
    id: string;
    name: string;
    description: string;
    image: string;
    kitchens: Kitchen[];
    contents: any[];
}

interface Kitchen {
    id: string;
    name: string;
    photos: Photo[];
}

interface Photo {
    id: string;
    image: string;
}

