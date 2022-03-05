import service from '../interceptor/interceptor';

export const fetchData = async (url) => {
    return await service.get(url);
}
