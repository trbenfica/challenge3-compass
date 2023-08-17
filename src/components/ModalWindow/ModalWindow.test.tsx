
import { render, fireEvent } from '@testing-library/react';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  test('não renderiza nada quando isOpen é falso', () => {
    const { container } = render(<ModalWindow isOpen={false} onClose={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  test('renderiza a janela modal quando isOpen é verdadeiro', () => {
    const { getByText } = render(
      <ModalWindow isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </ModalWindow>
    );
    const modalContent = getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });

  test('deve chamar onClose quando o botão \'fechar\' é clicado', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <ModalWindow isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </ModalWindow>
    );
    const closeButton = getByText('Fechar');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
