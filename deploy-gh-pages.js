import { publish } from 'gh-pages';

publish(
 'build', 
 {
  branch: 'gh-pages',
  repo: 'https://github.com/melissaluu/svelte-sfapi-landing-prototype.git', 
  user: {
   name: 'Melissa Luu', 
   email: 'melissa.luu@shopify.com' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);