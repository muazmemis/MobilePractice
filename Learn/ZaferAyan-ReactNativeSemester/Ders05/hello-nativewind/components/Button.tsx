import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
};

const Button = ({ title = 'Click me', variant = 'primary' }: Props) => {
  let bgColor = '';
  switch (variant) {
    case 'primary':
      bgColor = 'bg-green-500';
      break;
    case 'secondary':
      bgColor = 'bg-blue-500';
      break;
    case 'danger':
      bgColor = 'bg-red-500';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      break;
    case 'success':
      bgColor = 'bg-green-700';
      break;
    default:
      bgColor = 'bg-gray-500';
      break;
  }
  return (
    <TouchableOpacity className={`m-4 rounded-xl p-4 ${bgColor}`}>
      <Text className="text-center text-sm text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
