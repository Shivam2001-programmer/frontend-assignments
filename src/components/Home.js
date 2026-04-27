import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import data from '../data.json';

function Home() {
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const catMap = {};
    data.forEach(item => {
      if (!catMap[item.category]) {
        catMap[item.category] = [];
      }
      catMap[item.category].push(item);
    });
    return catMap;
  }, []);

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Product Catalog
      </Typography>
      {Object.keys(categories).map(category => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {categories[category].map(item => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card>
                  <CardActionArea onClick={() => handleItemClick(item.id)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.itemname}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {item.itemname}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
}

export default Home;