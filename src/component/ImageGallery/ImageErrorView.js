import { toast } from 'react-toastify';

export default function ImageErrorView({ message }) {
  console.log('message', message);
  return toast.error(`hello${message}`);
}
