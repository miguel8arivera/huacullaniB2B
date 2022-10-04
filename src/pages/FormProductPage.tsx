import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const salesOption = [
  {
    value: 'contado',
    label: 'Contado',
  },
  {
    value: 'credito',
    label: 'Credito',
  },
];

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const [sales, setSales] = React.useState('contado');

  const handleChangeSales = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSales(event.target.value);
  };

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '40%',
        marginRight: '80px',
        marginTop: '50px',
      }}
    >
      <div>
        <TextField
          label="Nombre del producto"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '45ch' }}
        />
        <TextField label="Precio" id="outlined-start-adornment" sx={{ m: 1, width: '45ch' }} />

        <TextField
          sx={{ m: 1, width: '45ch' }}
          id="outlined-select-currency"
          select
          label="Select"
          value={sales}
          onChange={handleChangeSales}
          helperText="Por favor seleccione el tipo de venta"
        >
          {salesOption.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button sx={{ m: 1, width: '45ch' }} variant="contained">
          Registrar Producto
        </Button>
      </div>
    </Box>
  );
}
