import { toast } from 'react-toastify';

export default function ImageErrorView() {
  return toast.error('Нет картинок по запросу');
}

// export default function ImageErrorView({message}) {
//   return <div>{message}</div>;
// }
