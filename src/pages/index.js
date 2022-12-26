import {HTMLHead} from '@/components/HTMLHead';
import Board from '@/components/Board';
import FloatingActions from '@/components/FloatingActions';
import {Layout} from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <HTMLHead title="Board" />
      {/*<Board />*/}
      <FloatingActions />
    </Layout>
  );
}
