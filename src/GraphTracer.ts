import { LogTracer, Tracer } from './';

class GraphTracer extends Tracer {
    set(array2d?: any[][]): this {
        return this.command('set', arguments);
    }

    directed(isDirected?: boolean): this {
        return this.command('directed', arguments);
    }

    weighted(isWeighted?: boolean): this {
        return this.command('weighted', arguments);
    }

    addNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number): this {
        return this.command('addNode', arguments);
    }

    updateNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number): this {
        return this.command('updateNode', arguments);
    }

    removeNode(id: any): this {
        return this.command('removeNode', arguments);
    }

    addEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number): this {
        return this.command('addEdge', arguments);
    }

    updateEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number): this {
        return this.command('updateEdge', arguments);
    }

    removeEdge(source: any, target: any): this {
        return this.command('removeEdge', arguments);
    }

    layoutCircle() {
        return this.command('layoutCircle', arguments);
    }

    layoutTree(root?: any, sorted?: boolean) {
        return this.command('layoutTree', arguments);
    }

    layoutRandom() {
        return this.command('layoutRandom', arguments);
    }

    visit(target: any, source?: any, weight?: any) {
        return this.command('visit', arguments);
    }

    leave(target: any, source?: any, weight?: any) {
        return this.command('leave', arguments);
    }

    select(target: any, source?: any) {
        return this.command('select', arguments);
    }

    deselect(target: any, source?: any) {
        return this.command('deselect', arguments);
    }

    log(logTracer: LogTracer) {
        return this.command('log', arguments);
    }
}

export default GraphTracer;
