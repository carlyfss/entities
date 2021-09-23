import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Role entity fields:
 * @id string
 * @name string
 */
@Entity('roles')
export default class Role {
  constructor(partial: Partial<Role>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  get information(): Partial<Role> {
    return {
      id: this.id,
      name: this.name
    }
  }
}