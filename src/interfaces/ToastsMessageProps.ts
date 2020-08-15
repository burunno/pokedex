export default interface IProps {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
