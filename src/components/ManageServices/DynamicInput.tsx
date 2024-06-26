/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface IProps {
  handleChange: (todos: string[]) => void;
  todos?: string[];
}

const DynamicInput = (props: IProps) => {
  const [inputFields, setInputFields] = useState([
    { id: Math.random(), value: '' },
  ]);

  const handleAddField = () => {
    setInputFields([...inputFields, { id: Math.random(), value: '' }]);
  };

  const handleChange = (id: number, event: any) => {
    const newInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(newInputFields);
  };

  const handleRemoveField = (id: number) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  useEffect(() => {
    props.handleChange(inputFields.map((field) => field.value));
  }, [inputFields]);

  useEffect(() => {
    if (props.todos) {
      setInputFields(
        props.todos.map((item) => ({
          id: Math.random(),
          value: item,
        }))
      );
    }
  }, [props.todos]);

  return (
    <div className='mb-3'>
      {inputFields.map((field) => (
        <Box
          key={field.id}
          sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
        >
          <TextField
            size='small'
            placeholder='Mô tả'
            value={field.value}
            onChange={(e) => handleChange(field.id, e)}
          />
          <Button
            variant='outlined'
            color='error'
            size='small'
            onClick={() => handleRemoveField(field.id)}
          >
            Xóa
          </Button>
        </Box>
      ))}
      <Button variant='outlined' onClick={handleAddField} size='small'>
        Thêm mô tả
      </Button>
    </div>
  );
};

export default DynamicInput;
