import { toast } from 'react-toastify';

export default function ImageErrorView({ message }) {
  return toast.error(`${message}`);
}
