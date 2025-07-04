<<<<<<< HEAD
import Image from "next/image";

export default function Logo(){
    return(
        <div>
            <Image
                src="/logo.webp"
                alt="Logo"
                width={200}
                height={100}
            
            />
        </div>
    )
}
=======
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image alt="Logo" height={100} src="/logo.webp" width={200} />
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
