import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import data from '../data.json';

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = data.find(i => i.id === parseInt(id));

  if (!item) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4">Item not found</Typography>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button onClick={() => navigate('/')} variant="outlined" sx={{ mb: 2 }}>
        Back to Home
      </Button>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          alt={item.itemname}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {item.itemname}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Category: {item.category}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Specifications:
          </Typography>
          <List>
            {item.itemprops.map((prop, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${prop.label}: ${prop.value}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ItemDetail;