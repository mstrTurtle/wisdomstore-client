import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Add, AddShoppingCart } from '@mui/icons-material';
var detail = {
    id: 1, 
    name: 'Code Complete', 
    cost: 3.5, 
    description: '代码大全是一本神书. 建议购买.'
}

export default function Detail({ children }){
    return <div>
        <h1>图书详情组件</h1>
        <Container disableGutters maxWidth="xl">
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h4"  gutterBottom>
                    {detail.name}
                </Typography>
        </Grid>
        <Grid item xs={8}>
            {'PICTURE'}
        </Grid>
        <Grid item xs={4}>
        <Box sx={{ my: 4 }}>
                
                <Typography variant="body1"  gutterBottom>
                    <p>{detail.description}</p>
                </Typography>
                
            </Box>
        <div>
                    价钱 : {detail.cost}
                </div>
                <div>
                    <Button variant="contained"><AddShoppingCart/> 加购</Button>
                </div>
        </Grid>
        </Grid>
            
        </Container>
    </div>
}