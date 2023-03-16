import ItemLink from './ItemLink';
import ItemNoLink from './ItemNoLink';
import { PRODUCTS, DELIVERY, COMPANY, CONTACT } from './Menus';
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <ItemNoLink informations={PRODUCTS} title="Boutique de fleurs" />
      <ItemNoLink informations={DELIVERY} title="Livraison en France " />
      <ItemLink Links={COMPANY} title="Wonderouman.fr" />
      <ItemNoLink informations={CONTACT} title="Contactez nous !" />
    </div>
  );
};

export default ItemsContainer;
