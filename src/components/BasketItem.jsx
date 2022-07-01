import { IconButton, ListItem, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;