import SlimSelect from "slim-select";
import 'slim-select/dist/slimselect.css';

export const addSlimSelect = () => {
  new SlimSelect({
    select: "#theme",
  });
  new SlimSelect({
    select: "#language",
  });
  new SlimSelect({
    select: "#region",
  });
}