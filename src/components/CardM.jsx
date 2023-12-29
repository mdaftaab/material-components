import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardM() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Material-UI Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a basic example of a Material-UI card.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardM;
