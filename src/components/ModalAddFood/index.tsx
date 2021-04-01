import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Food) => Promise<void>;
}


export function ModalAddFood({ 
  isOpen, 
  setIsOpen, 
  handleAddFood }: ModalAddFoodProps) 
  {

  async function handleSubmit(food: Food) {
    handleAddFood(food);
    setIsOpen();
  };


    return (
      <Modal isOpen={isOpen} onRequestClosed={setIsOpen}>
        <Form onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

