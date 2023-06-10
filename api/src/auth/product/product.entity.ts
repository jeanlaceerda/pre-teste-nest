import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url_image: '';

    @Column()
    description: string;

    @Column()
    is_favorite: string;

    @Column()
    price: number;


    
}