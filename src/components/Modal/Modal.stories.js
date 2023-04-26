import Modal from './Modal.vue';

export default {
  title: 'Components/Modal',
  component: Modal,

};

const isModalVisible = false;
const radioModel = 'yes';

const PrimaryTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  setup: () => ({ args }),
  data: () => ({ isModalVisible, radioModel }),
  template: `
    <button @click="isModalVisible = true">
      Open Modal
    </button>

    <Modal
      v-bind="args"
      :visible="isModalVisible"
      header="Selecione eventos"
      close-button-aria-label="Fechar modal de eventos de rastreamento"
      @close="isModalVisible = false"
    >
      Gostaria de exportar um CSV adicional de eventos de rastreamento associados?

      <template v-slot:footer>
        <div class="flex self-end">
          <button variant="secondary" @click="isModalVisible = false">Voltar</button>
          <button variant="primary" class="ml-2">Exportar</button>
        </div>
      </template>
    </Modal>
    `
});

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
};

