import Car from '../../images/2019 honda civic.png';
import Horse from '../../images/horse.png';
import Vending from '../../images/vendstar3000.png';

interface Definition {
    name: string;
    id: string;

    image: string;
}

const definitionMappings: Record<string, Definition> = {
    car: { name: '2019 Civic', id: 'car', image: Car },
    horse: { name: 'Double Ron', id: 'horse', image: Horse },
    vending: { name: 'Vendstar3k', id: 'vending', image: Vending },
};

export const getCharacterDefinitionForId = (id: string) =>
    definitionMappings[id];
