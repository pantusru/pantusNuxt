import MyButton from "./MyButton";
export default {
  title: "Button",
  component: MyButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["red", "blue"],
      },
      defaultValue: "red",
    },
    text: {
      control: "text",
      defaultValue: "Awesome Button",
    },
  },
};

export const ButtonBase = (arg, { argTypes }) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  template: '<MyButton v-bind="$props" />',
});
