import { publish } from 'gh-pages';

publish(
 'build', 
 {
  branch: 'gh-pages',
  repo: 'https://github.com/melissaluu/svelte-sfapi-landing-prototype.git', 
  user: {
   name: 'Melissa Luu', 
   email: 'melissa.luu@shopify.com' 
  }
  },
  () => {
   console.log('Deploy Complete!');
  }
);