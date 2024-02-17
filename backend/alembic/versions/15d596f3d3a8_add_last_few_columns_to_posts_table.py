"""add last few columns to posts table

Revision ID: 15d596f3d3a8
Revises: 6c15b06f85f6
Create Date: 2023-02-12 17:13:59.115785

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15d596f3d3a8'
down_revision = '6c15b06f85f6'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('posts', sa.Column(
        'published', sa.Boolean(), nullable=False, server_default='TRUE'),)
    op.add_column('posts', sa.Column(
        'created_at', sa.TIMESTAMP(timezone=True), nullable=False, server_default=sa.text('NOW()')),)
    pass


def downgrade():
    op.drop_column('posts', 'published')
    op.drop_column('posts', 'created_at')
    pass