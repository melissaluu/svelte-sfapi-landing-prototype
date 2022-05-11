<script lang="ts">
  export let product: any;
  function currencyFormatter(price: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: product.priceRange.minVariantPrice.currencyCode}).format(price);
  }
  $: image = product.featuredImage;
  $: productPrice = product.priceRange.maxVariantPrice.amount === product.priceRange.minVariantPrice.amount ?
    currencyFormatter(product.priceRange.maxVariantPrice.amount) 
    : `${currencyFormatter(product.priceRange.minVariantPrice.amount)} - ${currencyFormatter(product.priceRange.maxVariantPrice.amount)}`;
</script>

<div class="w-3/4 flex m-auto pt-6" id={`product-${product.id}`}>
  <img src={image.url} alt={image.altText} width={image.width} height={image.height} class="block w-48 border-2 border-gray-200 rounded-md ">
  <div class="ml-8 mt-3 text-gray-600">
    <a href={product.onlineStoreUrl} target=_blank class="text-xl hover:underline text-green-800 hover:text-green-500">{product.title}</a> 
    <p class="leading-relaxed mt-2">{product.description}</p>
    <p class="mt-3 text-lg font-semibold">{productPrice}</p>
  </div>
</div>
