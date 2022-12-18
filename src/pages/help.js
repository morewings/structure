import {HTMLHead} from '@/components/HTMLHead';
import {Layout} from '@/components/Layout';
import {Help as PageContent} from '@/components/Help';

const Help = () => {
  return (
    <Layout>
      <HTMLHead title="Help" />
      <PageContent />
    </Layout>
  );
};

export default Help;
