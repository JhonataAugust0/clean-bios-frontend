import { Column } from "components/Column";
import { ListItemProps, ListItem } from "./ListItem";

type ListProps = {
  items: ListItemProps[]
}


export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column py="10px">
      {
        items.map((item, index) => (
          <ListItem label={item.label} key={index} {...items} />
        ))
      }
    </Column>
  );
}
